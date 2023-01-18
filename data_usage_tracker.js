import { uid } from 'uid';

export default function DataUsageTracker(db) {

    async function registerUser(first_name, last_name, email){
        let usercode = uid();
        await db.none("insert into learner (first_name, last_name, email, usercode) values ($1, $2, $3, $4)", [first_name, last_name, email, usercode]);
        return usercode;
    }

    async function findUser(usercode){
        let user = await db.oneOrNone("select * from learner where usercode = $1", [usercode]);
        return user;
    }

    async function registerAppUsage(usercode, app_id, minUsed)	{
        let user = await findUser(usercode);
        await db.none("insert into learner_application_usage (learner_id, app_id, minutes_used) VALUES ($1, $2, $3)", [user.id, app_id, minUsed]);
    }

    async function totalCostPerUser(usercode){
        let user = await findUser(usercode);
        let usage = await db.any("select * from learner_application_usage join application on application.id = app_id where learner_id = $1", [user.id]);
        let total = 0;
        for(let i=0; i< usage.length; i++){
            total += usage[i].minutes_used * usage[i].usage_per_minute;
        }
        return total;
    }
    async function totalUsage(){
        let usage = await db.any("select * from learner_application_usage join application on application.id = app_id ");
        let total = 0;
        for(let i=0; i< usage.length; i++){
            total += usage[i].minutes_used * usage[i].usage_per_minute;
        }
        return total;
    }

    async function availableData(usercode)	{
        let user = await findUser(usercode);
        let used = await totalCostPerUser(usercode);
        let available = user.data_balance - used;
        return available;
    }

            async function mostUsedApp(usercode)  {
                let user = await findUser(usercode);   
                let usage = await db.any("select * from learner_application_usage join application on application.id = app_id where learner_id = $1", [user.id]); 
        
    }

        async function sendDataToAnotherUser(from_usercode_code,to_user_code,airtime)  {
            let user1=  await findUser(from_usercode_code);
            let user2=  await findUser(to_user_code);
            await db.none("update learner set data_balance= data_balance -$1 where usercode=$2",[airtime,from_usercode_code])

}



        
    return {
        registerUser,
        findUser,
        registerAppUsage,
        totalCostPerUser,
        availableData,
        mostUsedApp,
        sendDataToAnotherUser
    }
}  
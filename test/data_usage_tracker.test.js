import assert from 'assert';
import DataUsageTracker from '../data_usage_tracker.js';
import pgPromise from 'pg-promise';

// TODO configure this to work.
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://tracker:tracker123@localhost:5432/usagetracker";

const config = { 
	connectionString : DATABASE_URL
}

const pgp = pgPromise();
const db = pgp(config);

let dataTracker = DataUsageTracker(db);

describe("Data usage factory function", function () {

    beforeEach(async function () {
        await db.none('delete from learner_application_usage');
        await db.none(`delete from learner`);
    });

    it("it should be able to create a user and find by usercode", async function () {
        let usercode = await dataTracker.registerUser('Khanya', 'Buthelezi', 'khanya@gmail.com');
        let user = await dataTracker.findUser(usercode);
        assert.notEqual(user, null);
    });

    it("should be able to record usage for user and get total usage", async function () {
        let usercode = await dataTracker.registerUser('Khanya', 'Buthelezi', 'khanya@gmail.com');
        await dataTracker.registerAppUsage(usercode, 1, 10);
        let total = await dataTracker.totalCostPerUser(usercode);
        assert.equal(total, 80);
    });

    it("should be able to get user available data", async function () {
        let usercode = await dataTracker.registerUser('Khanya', 'Buthelezi', 'khanya@gmail.com');
        await dataTracker.registerAppUsage(usercode, 1, 10);
        let available = await dataTracker.availableData(usercode);
        assert.equal(available, 420);
    });

    after(function () {
        db.$pool.end()
    });

});
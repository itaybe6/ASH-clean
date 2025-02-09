const Cleaning = require('./models/cleaning');

const deleteOldCleanings = async () => {
    try {
        const twoMonthsAgo = new Date();
        twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

        const result = await Cleaning.deleteMany({ date: { $lt: twoMonthsAgo } });
        console.log(`🧹 נמחקו ${result.deletedCount} ניקיונות ישנים`);
    } catch (error) {
        console.error('❌ שגיאה במחיקת ניקיונות ישנים:', error);
    }
};

module.exports = deleteOldCleanings;

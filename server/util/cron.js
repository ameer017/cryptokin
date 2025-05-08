const cron = require("node-cron");
const { runCheckInReminder } = require("../controller/checkinReminder");

cron.schedule("0 12 * * *", () => {
  console.log("🔁 Running check-in reminder task...");
  runCheckInReminder();
});

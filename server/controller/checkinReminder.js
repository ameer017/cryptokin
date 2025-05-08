const moment = require('moment');
const User = require('../model/users');
const { sendEmail } = require('../util/sendEmail');

exports.runCheckInReminder = async () => {
  const today = moment();

  const users = await User.find();

  for (const user of users) {
    const lastCheckIn = moment(user.lastCheckIn);
    const daysSinceCheckIn = today.diff(lastCheckIn, 'days');

    if (daysSinceCheckIn >= 30 && daysSinceCheckIn < 60) {
      await sendEmail({
        to: user.email,
        subject: `🛑 Time to Check In!`,
        html: `
          <p>Hey ${user.firstName},</p>
          <p>You haven&apos;t checked in with Crypto Legacy for ${daysSinceCheckIn} days.</p>
          <p>Please log in to confirm everything is fine.</p>
          <p><a href="${process.env.FRONTEND_URL}/checkin">Check in now</a></p>
        `,
      });
    }

    if (daysSinceCheckIn >= 60) {
      for (const kin of user.trustedKins) {
        await sendEmail({
          to: kin.email,
          subject: `🚨 Possible Emergency for ${user.firstName}`,
          html: `
            <p>Dear ${kin.name},</p>
            <p>${user.firstName} hasn't checked in for over ${daysSinceCheckIn} days.</p>
            <p>If you&apos;re in touch, please confirm their wellbeing.</p>
            <p>Thank you,</p>
            <p><strong>Crypto Legacy Notifier</strong></p>
          `,
        });
      }
    }
  }
};

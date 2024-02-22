const mongoose = require('mongoose');

const UserSettingsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'User'
  },
  profileSettings: {
    profileTitle: { type: String, default: '' },
    profileBio: { type: String, default: '' },
    profileImage: { type: String, default: '' },
    profileBanner: { type: String, default: '' },
    profileWebsite: { type: String, default: '' },
    profileLocation: { type: String, default: '' },
    profileCompany: { type: String, default: '' },
    profileSocialLinks: {
      github: { type: String, default: '' },
      twitter: { type: String, default: '' },
      facebook: { type: String, default: '' },
      linkedin: { type: String, default: '' },
      instagram: { type: String, default: '' },
      youtube: { type: String, default: '' },
      twitch: { type: String, default: '' },
      discord: { type: String, default: '' },
      spotify: { type: String, default: '' }
    }
  },
  accountSettings: {
    accountTitle: { type: String, default: '' },
    accountBio: { type: String, default: '' },
    accountImage: { type: String, default: '' },
    accountBanner: { type: String, default: '' },
    accountWebsite: { type: String, default: '' },
    accountLocation: { type: String, default: '' },
    accountCompany: { type: String, default: '' },
    accountSocialLinks: {
      github: { type: String, default: '' },
      twitter: { type: String, default: '' },
      facebook: { type: String, default: '' },
      linkedin: { type: String, default: '' },
      instagram: { type: String, default: '' },
      youtube: { type: String, default: '' },
      twitch: { type: String, default: '' },
      discord: { type: String, default: '' },
      spotify: { type: String, default: '' }
    }
  },
  
  emailPreferences: {
    promotionalEmails: { type: Boolean, default: false },
    updateEmails: { type: Boolean, default: false },
    subscriptionEmails: { type: Boolean, default: false }
  },
  notificationSettings: {
    receiveNotifications: { type: Boolean, default: false },
    notificationTypes: {
      comments: { type: Boolean, default: false },
      likes: { type: Boolean, default: false },
      follows: { type: Boolean, default: false }
    }
  },
  privacySettings: {
    profileVisibility: {
      type: String,
      enum: ['public', 'private', 'friendsOnly'],
      default: 'public'
    },
    showOnlineStatus: { type: Boolean, default: true }
  }
}, { timestamps: true });

const UserSettings = mongoose.model('UserSettings', UserSettingsSchema);

module.exports = UserSettings;

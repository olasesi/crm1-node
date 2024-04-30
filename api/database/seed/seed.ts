import User from "./../models/User";
import { connection, disconnection } from "./../../utility/connection";
import GeneralSetting from "./../models/GeneralSetting";
import UserType from "./../models/UserType";
import bcrypt from "bcrypt";

// Connect to MongoDB
connection();

// Define seed data
const seedGeneralSettingData = [
  {
    companyName: "Company A",
    companyMainDomain: "companyA.com",
    adminAreaRTL: false,
    customerAreaRTL: false,
  },
];

const seedUserTypeData = [
  { name: "Admin" },
  { name: "HRAmdin" },
  { name: "Staff" },
  { name: "Customer" },
];

const seedUserData = [
  {
    firstname: "Ahmed",
    lastname: "Olusesi",
    email: "email",
    password: bcrypt.hash("password", 10),
    active: true,
    userType: "Admin",
  },
];
// Seed function
async function seedDatabase() {
  try {
    // Clear existing data
    await GeneralSetting.deleteMany();
    await GeneralSetting.create(seedGeneralSettingData);

    await UserType.deleteMany();
    await UserType.create(seedUserTypeData);

    await User.deleteMany();
    await User.create(seedUserData);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Disconnect from MongoDB
    disconnection();
  }
}

// Run seed function
seedDatabase();

enum roleSelected {
  "user",
  "admin",
};

export type TUser = {
  id: string,
  userName: string,
  fullName: string,
  profilePicUrl: string,
  userBio: string,
  email: string,
  role: roleSelected,
  isEmailVerified: Date,
  createdAt: Date,
  updatedAt: Date
};


import { User } from "../models/entities";

export const GetUsers = async () => {
  const users = await User.findAll({
    where: {
      active: true
    }
  });
  return users;
}

export const GetUser = async (id: number) => {
  const user = await User.findByPk(id);
  if (user) {
    return user;
  } else {
    return null;
  }
}

export const SaveUser = async (body: any) => {
  try {
    const entity = {
      name: body.name,
      age: body.age,
      sex: body.sex,
      active: true
    }
    const res = User.build(entity);
    await res.save();
    return res;
  } catch (error) {
    throw (error);
  }
}

export const EditUser = async (body: any, id: number) => {
  try {
    const oldUser = await GetUser(id);
    if (!oldUser) {
      return null;
    }
    const entity = {
      name: body.name,
      age: body.age,
      sex: body.sex
    }
    await oldUser.update(entity);
    return true;
  } catch (error) {
    throw (error);
  }
}

export const DeleteUser = async (id: number) => {
  try {
    const oldUser = await GetUser(id);
    if (!oldUser) {
      return null;
    }
    await oldUser.update({ active: false });
    return true;
  } catch (error) {
    throw (error);
  }
}
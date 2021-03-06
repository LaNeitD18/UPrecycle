import { Request, Response } from "express";
import User from "../models/user.model";

export const getUser = async (req: Request, res: Response) => {
  try {
    await User.findById(req.params.id).then((user) => {
      return res.status(200).json(user);
    }).catch((err) => res.status(404).json({ msg: 'This user does not exist.'}))

  } catch (error: any) {
    return res.status(500).json({ msg: error.message })
  }
}

export const addUser = async (req: Request, res: Response) => {
  try {
    const { id, name, email } = req.body;

    const newUser = new User({ _id: id, name, email });
    await newUser.save()

    return res.status(200).json(newUser)
  } catch (err: any) {
    return res.status(500).json({msg: err.message})
  }
}
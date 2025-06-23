import Men from '../models/userModels.js'

//create user
export const createUser = async (req, res, next) => {
      try {
            const user = await Men.create(req.body);
            res.status(201).json(user);
      } catch (err) {
            next(err)
      }
}

//get users
export const getUsers = async (req, res, next) => {
      try {
            const users = await Men.find()
            res.json(users)
      } catch (err) {
            next(err)
      }
}

//get user by id
export const getUserById = async (req, res, next) => {
      try {
            const user = await Men.findById(req.params.id);
            if (!user) return res.status(404).json({ message: 'user not found' });
            res.json(user);
      } catch (err) {
            next(err)
      }
}

//update user by id
export const updateUserById = async (req, res, next) => {
      try {
            const user = await Men.findByIdAndUpdate(req, params.id, req.body);

            if (!user) return res.status(404).json({ message: 'user not found' });
            res.json(user);
      } catch (err) {
            next(err)
      }
}

//delete ser by id
export const deleteUserById = async (req, res, next) => {
      try {
            const user = await Men.findByIdAndDelete(req, params.id);
            if (!user) return req.status(404).json({ message: 'user not found' })
            res.json({ message: 'user delete success' });
      } catch (err) {
            next(err)
      }
}
import { create } from 'zustand'

import { IUser } from '../interfaces/user.interface'

interface State {
  user: IUser
  setUser: (data: IUser) => void
  resetStore: () => void
}

export const useGlobal = create<State>((set) => ({
  user: {
    _id: '',
    first_name: '',
    last_name: '',
    address_street: '',
    address_state: '',
    address_zip: '',
    address_city: '',
    phone: '',
    email: '',
    dob: new Date(),
    role: 'seekers',
    biography: '',
    photo_id: '',
    lat: 0,
    lon: 0,
  },

  setUser: (data: IUser) => set({ user: data }),
  resetStore: () =>
    set({
      user: {
        _id: '',
        first_name: '',
        last_name: '',
        address_street: '',
        address_state: '',
        address_zip: '',
        address_city: '',
        phone: '',
        email: '',
        dob: new Date(),
        role: 'seekers',
        biography: '',
        photo_id: '',
        lat: 0,
        lon: 0,
      },
    }),
}))

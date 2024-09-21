export interface IUser {
  _id: string
  first_name: string
  last_name: string
  address_street: string
  address_state: string
  address_zip: string
  address_city: string
  phone: string
  email: string
  dob: Date
  role: 'seekers' | 'donor'
  biography: string
  photo_id: string
  lat: number
  lon: number
}

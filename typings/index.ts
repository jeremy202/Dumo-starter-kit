export interface Account {
  id: string
  created_at: string
  updated_at: string
  key: string
  first_name: string
  middle_name: string
  last_name: string
  email: string
  country: string
  state: string | null
  phone_number: string | null
  phone_number_verified_at: string | null
  username: string | null
  email_verified_at: string | null
  login_notification: boolean
}
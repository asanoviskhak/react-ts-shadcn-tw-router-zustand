import { create } from 'zustand'

// TODO: Change to proper type
export type Profile = {
    id: string
    name: string
    email: string
    avatar: string
}

export type ProfileUpdate = Partial<Profile>

interface ProfileState {
    profile: Profile | null
    updateProfile: (profile: ProfileUpdate) => void
  }

export const useProfile = create<ProfileState>((set) => ({
  profile: null,
  updateProfile: (profile) => set({ profile: { ...profile } as Profile }),
}))
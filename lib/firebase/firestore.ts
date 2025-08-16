import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
} from 'firebase/firestore'
import { db } from './config'
import type { User, Website, InstagramAccount, InstagramPost } from '@/types'

// User operations
export const createUser = async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
  const docRef = await addDoc(collection(db, 'users'), {
    ...userData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  })
  return docRef.id
}

export const getUser = async (userId: string): Promise<User | null> => {
  const docRef = doc(db, 'users', userId)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as User
  }
  return null
}

export const updateUser = async (userId: string, userData: Partial<User>) => {
  const docRef = doc(db, 'users', userId)
  await updateDoc(docRef, {
    ...userData,
    updatedAt: Timestamp.now(),
  })
}

// Website operations
export const createWebsite = async (websiteData: Omit<Website, 'id' | 'createdAt' | 'updatedAt'>) => {
  const docRef = await addDoc(collection(db, 'websites'), {
    ...websiteData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  })
  return docRef.id
}

export const getUserWebsites = async (userId: string): Promise<Website[]> => {
  const q = query(
    collection(db, 'websites'),
    where('userId', '==', userId),
    orderBy('updatedAt', 'desc')
  )
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Website))
}

export const updateWebsite = async (websiteId: string, websiteData: Partial<Website>) => {
  const docRef = doc(db, 'websites', websiteId)
  await updateDoc(docRef, {
    ...websiteData,
    updatedAt: Timestamp.now(),
  })
}

export const deleteWebsite = async (websiteId: string) => {
  await deleteDoc(doc(db, 'websites', websiteId))
}

// Instagram operations
export const createInstagramAccount = async (accountData: Omit<InstagramAccount, 'id' | 'createdAt' | 'updatedAt'>) => {
  const docRef = await addDoc(collection(db, 'instagramAccounts'), {
    ...accountData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  })
  return docRef.id
}

export const getUserInstagramAccounts = async (userId: string): Promise<InstagramAccount[]> => {
  const q = query(
    collection(db, 'instagramAccounts'),
    where('userId', '==', userId)
  )
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as InstagramAccount))
}

export const createInstagramPost = async (postData: Omit<InstagramPost, 'id' | 'createdAt' | 'updatedAt'>) => {
  const docRef = await addDoc(collection(db, 'instagramPosts'), {
    ...postData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  })
  return docRef.id
}

export const getAccountPosts = async (accountId: string): Promise<InstagramPost[]> => {
  const q = query(
    collection(db, 'instagramPosts'),
    where('accountId', '==', accountId),
    orderBy('createdAt', 'desc'),
    limit(50)
  )
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as InstagramPost))
}
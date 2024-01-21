'use server';

import { db } from '@/lib/db';

import { revalidatePath } from 'next/cache';

export const deleteUser = async (id?: string) => {
  const updatedUser = await db.user.delete({
    where: { id: id },
  });
  revalidatePath('/users-app');
};

'use server';
import { AxiosResponse } from 'axios';
import { CourseResponse, CourseType } from '../Models/Course';
import { revalidatePath } from 'next/cache';
import baseApi from './BaseApi';
const asyncGetAllCourses = async (): Promise<CourseResponse> => {
  try {
    const response: AxiosResponse<CourseResponse> =
      await baseApi.get<CourseResponse>('/courses');
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const asyncAddCourse = async (data: Partial<CourseType>): Promise<void> => {
  try {
    await baseApi.post(`/courses`, data);
    revalidatePath('/');
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const asyncDeleteCourse = async (data: Partial<CourseType>): Promise<void> => {
  try {
    await baseApi.delete(`/courses/${data.id}`);
    revalidatePath('/');
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const asyncEditCourse = async (data: CourseType): Promise<void> => {
  try {
    await baseApi.patch(`/courses/${data.id}`, {
      title: data.title,
    });
    revalidatePath(`/`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export {
  asyncGetAllCourses,
  asyncAddCourse,
  asyncDeleteCourse,
  asyncEditCourse,
};

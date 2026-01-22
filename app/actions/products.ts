"use server";

// import { addProduct, updateProduct, deleteProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export async function createProduct(prevState: FormState, formData: FormData) {
//   had to use previous state because in useactionstate the last state is passed even if we submit a empty form that caused errors to not show up
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

//   await addProduct(title, parseInt(price), description);
//   function defined in database prisma that coudnt be configured 
  redirect("/products-db");
}

export async function editProduct(
  id: number,
  prevState: FormState,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

//   await updateProduct(id, title, parseInt(price), description);
//   function defined in database prisma that coudnt be configured 

  redirect("/products-db");
}

export async function removeProduct(id: number) {
//   await deleteProduct(id);
//   function defined in database prisma that coudnt be configured 

  revalidatePath("/products-db");
}
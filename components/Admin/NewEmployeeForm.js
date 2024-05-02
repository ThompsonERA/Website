import React from 'react';
import useAuth from '../../hooks/useAuth'; // Updated hook location
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const NewEmployeeForm = () => {
  const { handleRegister } = useAuth(); // Updated to useAuth based on the given context
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    // Password validation
    if (data.password !== data.confirm_password) {
      return Swal.fire({
        icon: 'error',
        title: 'Passwords do not match',
        text: 'Please make sure the passwords match.',
      });
    }
    if (data.password.length < 6) {
      return Swal.fire({
        icon: 'error',
        text: 'Password must be at least 6 characters long.',
      });
    }
    // Prepare userData
    const userData = {
      ...data,
      name: `${data.first_name} ${data.last_name}`,
      isAdmin: data.isAdmin || false, // Default to false if not checked
    };
    handleRegister(userData, () => {
      reset(); // Reset the form after successful registration
    });
  };
  return (
    <div>
      <h2>Create New Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true })}
          placeholder='Username'
        />
        <input
          {...register("first_name", { required: true })}
          placeholder='First Name'
        />
        <input
          {...register("last_name", { required: true })}
          placeholder='Last Name'
        />
        <input
          {...register("email", { required: true })}
          placeholder='Email'
        />
        <input
          {...register("password", { required: true })}
          placeholder='Password'
          type="password"
        />
        <input
          {...register("confirm_password", { required: true })}
          placeholder='Confirm Password'
          type="password"
        />
        <label>
          <input type="checkbox" {...register("isAdmin")} />
          Is Admin
        </label>
        {errors.password && <p>Your password must be at least 6 characters</p>}
        {errors.confirm_password && <p>Passwords must match</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default NewEmployeeForm;
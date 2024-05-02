import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useSelector } from "react-redux";
import Link from 'next/link';
import { useGetMyCoursesQuery } from "../../redux/api/apiSlice";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const NewServiceComponent = () => {
  const [createdService, setCreatedService] = useState(null);
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      cost: 0, 
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        for (const key in values) {
          if (values[key] !== null) { 
            formData.append(key, values[key]);
          }
        }
        const response = await axios.post('http://localhost:4001/services/create', formData); 
        setCreatedService(response.data);
        console.log('Service created successfully');
      } catch (error) {
        console.error('Error creating service', error);
      }
    },
  });
  return (
    <div>
      <h2>Create New Service</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder='Title'
        />
        <textarea
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          placeholder='Description'
        />
        <input
          type="number"
          name="cost"
          onChange={formik.handleChange}
          value={formik.values.cost}
          placeholder='Cost'
        />
        <button type="submit">Submit</button>
      </form>
      {createdService && <p>Service Created: {createdService.title}</p>}
    </div>
  );
};
export default NewServiceComponent;
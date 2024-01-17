"use client";

import useApi from "@/hooks/useApi";
import { API_URLS } from "@/services/api.urls";
import { useState } from "react";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [droneImage, setDroneImage] = useState();
  const [payloadImage, setPayloadImage] = useState();
  const [specifications, setSpecifications] = useState([
    { key: "", value: "" },
  ]);
  const [payloadFeatures, setPayloadFeatures] = useState([""]);

  const [relatedImages, setRelatedImages] = useState([]);
  const [payloadRelatedImages, setPayloadRelatedImages] = useState([]);

  const saveNewProductsService = useApi(API_URLS.addProduct);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title: name,
      image: droneImage,
      description: description,
      relatedImages: relatedImages,
      specifications: specifications,
      payloadFeatures: payloadFeatures,
      payloadImage: payloadImage,
      payloadRelatedImages: payloadRelatedImages,
    };

    console.log(payload);

  //   try {
  //   // Make API call
  //    saveNewProductsService.call(payload);

  //   // Check if the API call was successful
  //   if (!saveNewProductsService.error) {
  //     // Clear form fields after successful response
  //     setName("");
  //     setDescription("");
  //     setDroneImage();
  //     setPayloadImage();
  //     setRelatedImages([]);
  //     setPayloadRelatedImages([]);
  //     setSpecifications([{ key: "", value: "" }]);
  //     setPayloadFeatures([""]);

  //     // Optionally, display a success message to the user
  //     console.log("Product added successfully!");
  //   } else {
  //     // Display an error message to the user
  //     console.error("Error adding product:", saveNewProductsService.error);
  //   }
  // } catch (error) {
  //   console.error("Unexpected error:", error);
  // }
  };

  const changeImageHandler = (e, setFunction) => {
    const file = e.target.files?.[0];

    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setFunction(reader.result);
      };
    }
  };

  const relatedImageHandler = (e, setFunction) => {
    const files = e.target.files;

    const newImages = [];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const file = files[i];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            newImages.push(reader.result);

            if (i === files.length - 1) {
              // Only update state after all files are processed
              setFunction((prevImages) => [...prevImages, ...newImages]);
            }
          }
        };
      }
    }
  };

  const handleSpecificationChange = (index, key, value) => {
    const newSpecifications = [...specifications];
    newSpecifications[index] = { key, value };
    setSpecifications(newSpecifications);
  };

  const addMoreSpecification = () => {
    setSpecifications([...specifications, { key: "", value: "" }]);
  };

  const handlePayloadFeatureChange = (index, value) => {
    const newFeatures = [...payloadFeatures];
    newFeatures[index] = value;
    setPayloadFeatures(newFeatures);
  };

  const addMoreFeature = () => {
    setPayloadFeatures([...payloadFeatures, ""]);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="p-5  mt-3 border border-secondary rounded-md "
    >
      <h2 className="my-5 text-xl text-secondary font-semibold">
        {" "}
        Add New Product
      </h2>
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Product Name"
              // required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Description
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Product Name"
              // required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Drone Image
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              // required
              type="file"
              onChange={(e) => changeImageHandler(e, setDroneImage)}
            />
          </div>
        </div>
        <div className="mt-2">
          {droneImage && (
            <img
              src={droneImage}
              alt="New Image"
              className="w-40 h-full mx-auto object-cover"
            />
          )}
        </div>

        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Drone Related Image
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              // required
              type="file"
              onChange={(e) => relatedImageHandler(e, setRelatedImages)}
            />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-2 flex-wrap">
          {relatedImages.length > 0 &&
            relatedImages.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt="New Image"
                  className="w-16 h-16 mx-auto object-cover"
                />
              );
            })}
        </div>

        <div className="mt-5">
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Specifications
          </label>
          {specifications.map((spec, index) => (
            <div key={index} className="flex space-x-2 space-y-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Key"
                value={spec.key}
                onChange={(e) =>
                  handleSpecificationChange(index, e.target.value, spec.value)
                }
              />
              <input
                className="
                flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Value"
                value={spec.value}
                onChange={(e) =>
                  handleSpecificationChange(index, spec.key, e.target.value)
                }
              />
            </div>
          ))}
          <button
            type="button"
            className="mt-4 inline-flex items-center text-sm font-medium px-4 py-2 bg-secondary rounded-lg my-2 text-white cursor-pointer"
            onClick={addMoreSpecification}
          >
            Add more specification
          </button>
        </div>

        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Payload Image
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              // required
              type="file"
              onChange={(e) => changeImageHandler(e, setPayloadImage)}
            />
          </div>
        </div>

        <div className="mt-3">
          {payloadImage && (
            <img
              src={payloadImage}
              alt="New Image"
              className="w-40 h-full mx-auto object-cover"
            />
          )}
        </div>

        <div className="mt-5">
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Payload Features
          </label>
          {payloadFeatures.map((feature, index) => (
            <div key={index} className="flex mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="feature"
                value={feature.key}
                onChange={(e) =>
                  handlePayloadFeatureChange(index, e.target.value)
                }
              />
            </div>
          ))}
          <button
            type="button"
            className="mt-2 inline-flex items-center text-sm font-medium px-4 py-2 bg-secondary rounded-lg my-2 text-white cursor-pointer"
            onClick={addMoreFeature}
          >
            Add more Features
          </button>
        </div>

        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Payload Related Image
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              // required
              type="file"
              onChange={(e) => relatedImageHandler(e, setPayloadRelatedImages)}
            />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-2 flex-wrap">
          {payloadRelatedImages.length > 0 &&
            payloadRelatedImages.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt="New Image"
                  className="w-16 h-15 mx-auto object-cover"
                />
              );
            })}
        </div>
      </div>

      <div className="mt-5">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-secondary px-3.5 py-2.5 font-semibold leading-7 text-white hover:opacity-80"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;

import Patient from "../models/patient.model.js";
import cloudinary from "../config/cloudinary.js";
import { Formatter, Success } from "../services/response.formatter.js";

export const addPatient = async (req, res) => {
   const { body, file } = req;
   try {
      // if (file.length === 0) {
      //    return res
      //       .status(404)
      //       .json(Formatter.error(ProductsError.ImageNotFoundError.message, null));
      // }
      let picture_url = await cloudinary.v2.uploader.upload(file.path);
      body.imageURL = picture_url.secure_url;

      const response = await Patient.create(body);
      res.status(200).json({
         status: true,
         message: 'Succesfully added patient',
         data: response,
      })
   } catch (error) {
      console.log(error);
      // res
      //    .status(400)
      //    .json(Formatter.error(ProductsError.ProductAddError.message, error));
   }
};

export const getPatient = async (req, res) => {
   try {
      const patients = await Patient.find({});
      res.send(patients);
   } catch (error) {
      res
         .status(400)
         .json(Formatter.error(ProductsError.ProductFetchError.message, error));
   }
};

export const removePatient = async (req, res) => {
   try {
      const { id } = req.params;
      await Patient.findOneAndDelete({ _id: id });

      return res.status(200).json(
         Formatter.success(
            Success.PatientDeleteSuccess.message,
            null,
         ),
      );
   } catch (error) {
      res
         .status(400)
         .json(Formatter.error(Error.PatientDeleteError.message, error));
   }
};

export const updatePatient = async (req, res) => {
   const { id } = req.params;
   const { body, file } = req;
   const { imageURL } = body;
   try {
   } catch (error) {
      res
         .status(400)
         .json(Formatter.error(ProductsError.ProductUpdateError.message, error));
   }
};

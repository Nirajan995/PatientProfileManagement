import Patient from "../models/patient.model.js";
import cloudinary from "../config/cloudinary.js";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { Error, Formatter, Success } from "../services/response.formatter.js";

export const addPatient = async (req, res) => {
   const { body, file } = req;
   try {
      await sharp(file.path)
         .resize(200, 200)
         .toFormat("jpeg")
         .jpeg({ quality: 90 })
         .toFile(`public/resized/${file.filename}`);
      await fs.unlinkSync(file.path);
      let picture_url = await cloudinary.v2.uploader.upload(`public/resized/${file.filename}`);
      body.imageURL = picture_url.secure_url;

      const response = await Patient.create(body);
      res.status(200).json(Formatter.success(Success.AddPatientSuccess.message, response))
   } catch (error) {
      console.log(error)
      res
         .status(400)
         .json(Formatter.error(Error.AddPatientFailure.message, error));
   }
};

export const getPatient = async (req, res) => {
   try {
      const patients = await Patient.find({}).sort({ specialAttention: -1 });
      res.status(200).json(Formatter.success(Success.PatientFetchSuccess.message, patients));
   } catch (error) {
      res
         .status(400)
         .json(Formatter.error(ProductsError.ProductFetchError.message, error));
   }
};

export const removePatient = async (req, res) => {
   try {
      const { id } = req.params;

      const pat = await Patient.findOne({ _id: id });

      if (!pat) {
         return res
            .status(404)
            .json(
               Formatter.error(Error.PatientNotFound.message, null),
            );
      }

      const patient = await Patient.findOneAndDelete({ _id: id });
      cloudinary.v2.uploader.destroy(getPublicId(patient.imageURL), function (error, result) {
         if (error) {
            console.log(error)
            return res
               .status(400)
               .json(Formatter.error(Error.PatientDeleteError.message, error));
         }
         res.status(200).json(
            Formatter.success(
               Success.PatientDeleteSuccess.message,
               null,
            ),
         );
      });

   } catch (error) {
      res
         .status(400)
         .json(Formatter.error(Error.PatientDeleteError.message, error));
   }
};


const getPublicId = (imageURL) => imageURL.split("/").pop().split(".")[0];

export const updatePatient = async (req, res) => {
   const { id } = req.params;
   const { body, file } = req;
   try {

      const patient = await Patient.findOne({ _id: id });

      if (!patient) {
         return res
            .status(404)
            .json(
               Formatter.error(Error.PatientNotFound.message, null),
            );
      }

      cloudinary.v2.uploader.destroy(getPublicId(patient.imageURL), async function (error, result) {
         if (error) {
            return res
               .status(400)
               .json(Formatter.error(Error.PatientDeleteError.message, error));
         }

         let picture_url = await cloudinary.v2.uploader.upload(file.path);
         body.imageURL = picture_url.secure_url;

         const response = await Patient.findOneAndUpdate({ _id: id }, {
            $set: body
         });
         res.status(200).json(Formatter.success(Success.UpdatePatientSuccess.message, response))
      });

   } catch (error) {
      res
         .status(400)
         .json(Formatter.error(Error.ProductUpdateError.message, error));
   }
};

export const getPatientById = async (req, res) => {
   const { id } = req.params;
   try {
      const patient = await Patient.findOne({ _id: id });
      if (!patient) {
         return res
            .status(404)
            .json(
               Formatter.error(Error.PatientNotFound.message, null),
            );
      }
      res.status(200).json(Formatter.success(Success.PatientFetchByIdSuccess.message, patient));
   } catch (error) {
      res
         .status(400)
         .json(
            Formatter.error(Error.PatientFetchByIdError.message, error),
         );
   }
};
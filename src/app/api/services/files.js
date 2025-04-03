import cloudinary from '@/utils/cloudinaryUtils';

export const FilesServices = {
  upload: async ({file, folder}) => {
    try {
      const buffer = await file.arrayBuffer();
      const base64Image = Buffer.from(buffer).toString('base64');
      const fileDataUri = `data:${file.type};base64,${base64Image}`;

      const cloudinaryUpload = await cloudinary.uploader.upload(fileDataUri, {
        folder,
      });

      return {success: true, imageUrl: cloudinaryUpload.secure_url};
    } catch (error) {
      return {success: false, error: error.message};
    }
  },
};

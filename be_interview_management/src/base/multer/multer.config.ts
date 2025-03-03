import { extname } from 'path';
import * as exc from '@base/api/exception.reslover';
import { config } from '@/config';

export const multerConfig = {
  dest: config.UPLOAD_LOCATION,
};

// Multer upload options
export const multerOptions = {
  // Enable file size limits
  limits: {
    fileSize: config.MAX_FILE_SIZE,
  },
  // Check the mimetypes to allow for upload
  fileFilter: (req: any, file: any, cb: any) => {
    console.log(file.mimetype);

    if (
      file.mimetype.match(/\/(jpg|jpeg|png|gif)$/) ||
      file.mimetype.match(/\/(xlsx|doc|document|pdf)$/) ||
      file.mimetype.includes(
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      )
    ) {
      // Allow storage of file
      cb(null, true);
    } else {
      // Reject file
      cb(
        new exc.UnsupportedMediaType({
          message: `Unsupported file type ${extname(file.originalname)}`,
        }),
        false,
      );
    }
  },
  // Storage properties
  // storage: diskStorage({
  //   // Destination storage path details
  //   destination: (req: any, file: any, cb: any) => {
  //     const uploadPath = multerConfig.dest;
  //     // Create folder if doesn't exist
  //     if (!existsSync(uploadPath)) {
  //       mkdirSync(uploadPath);
  //     }
  //     cb(null, uploadPath);
  //   },
  //   // File modification details
  //   filename: (req: any, file: any, cb: any) => {
  //     // Calling the callback passing the random name generated with the original extension name
  //     cb(null, `${makeUUID(file.originalname)}`);
  //   },
  // }),
};

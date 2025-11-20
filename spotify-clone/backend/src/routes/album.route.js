import { Router } from "express";

import { getALbumById, getAllAlbums } from "../controller/album.controller.js";

const router = Router();

router.get("/", getAllAlbums);
router.get("/:albumId", getALbumById);

export default router;

// here is Service Gallery related  functionality

const { ServiceGallery, FacilitiesGallery } = require("./galleryModel");

const createServiceGallery = async (req, res) => {
  try {
    const addServiceGallery = new ServiceGallery(req.body);
    await addServiceGallery.save();
    res.status(200).json({
      message: "Succesfully added on Service Gallery",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getAllServiceGallery = async (req, res) => {
  try {
    const result = await ServiceGallery.find();
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(200).json({
      error,
    });
  }
};

// here is FeaturesGallery Functionality work

const createFacilities = async (req, res) => {
  try {
    const addNewFacilities = new FacilitiesGallery(req.body);
    await addNewFacilities.save();
    res.status(200).json({
      message: "Succesfully added on Service Gallery",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getAllFacilities = async (req, res) => {
  try {
    const result = await FacilitiesGallery.find();
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(200).json({
      error,
    });
  }
};

module.exports = {
  createServiceGallery,
  getAllServiceGallery,
  createFacilities,
  getAllFacilities,
};

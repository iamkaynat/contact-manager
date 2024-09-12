const express = require('express');
const router = express.Router();

const { getContacts, getContactById, createContact, updateContact, deleteContact } = require('../controller/contactController');

router.route("/")
    .get(getContacts)
    .post(createContact);

router.route("/:id")
    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;
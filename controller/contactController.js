//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getContacts = (req, res) => {
    res.status(200).json({ message: 'All contatcs' });
}

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access public 
const getContactById = (req, res) => {
    res.status(200).json({ message: `Contact with id : ${req.params.id}` });
}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public 
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update Contact with id : ${req.params.id}` });
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public 
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete Contact with id : ${req.params.id}` });
}

//@desc Craete contact
//@route POST /api/contacts/
//@access public 
const createContact = (req, res) => {
    console.log(req.body);
    const { name, phone } = req.body;
    if (!name || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({ message: `Create Contact ${JSON.stringify(req.body)}` });
}

module.exports = { getContacts, getContactById, createContact, updateContact, deleteContact };
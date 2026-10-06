let contacts = [];

const getContacts = (req, res) => {
    res.status(200).json({
        success: true,
        contacts: contacts
    });
};

const addContact = (req, res) => {
    const { name, phone, relationship } = req.body;

    if (!name || !phone || !relationship) {
        return res.status(400).json({
            success: false,
            message: "Name, phone and relationship are required"
        });
    }

    const newContact = {
        id: contacts.length + 1,
        name,
        phone,
        relationship
    };

    contacts.push(newContact);

    res.status(201).json({
        success: true,
        message: "Contact added successfully",
        contact: newContact
    });
};

const updateContact = (req, res) => {
    const id = parseInt(req.params.id);

    const contact = contacts.find(contact => contact.id === id);

    if (!contact) {
        return res.status(404).json({
            success: false,
            message: "Contact not found"
        });
    }

    const { name, phone, relationship } = req.body;

    if (name) contact.name = name;
    if (phone) contact.phone = phone;
    if (relationship) contact.relationship = relationship;

    res.status(200).json({
        success: true,
        message: "Contact updated successfully",
        contact: contact
    });
};

const deleteContact = (req, res) => {
    const id = parseInt(req.params.id);

    const contactIndex = contacts.findIndex(
        contact => contact.id === id
    );

    if (contactIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Contact not found"
        });
    }

    contacts.splice(contactIndex, 1);

    res.status(200).json({
        success: true,
        message: "Contact deleted successfully"
    });
};

module.exports = {
    getContacts,
    addContact,
    updateContact,
    deleteContact
};
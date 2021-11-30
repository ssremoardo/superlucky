import { listContact } from '../Services/Contacts'

async function contactsResources(req, res) {
    await listContact(req, res)
}

export { contactsResources }
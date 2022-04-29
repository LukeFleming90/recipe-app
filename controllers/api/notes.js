const Note = require('../../models/note');

module.exports = {
  index,
  show,
  create
};

async function index(req, res) {
  try{
    const notes = await Note.find({}).sort('date').populate('type').exec();
    // re-sort based upon the sortOrder of the categories
    notes.sort((a, b) => a.type.sortOrder - b.type.sortOrder);
    res.status(200).json(notes);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const note = await Note.findById(req.params.id);
    res.status(200).json(note);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

async function create(req, res) {

  try {
    const { body } = req
    const createdNote = await Note.create(body)
    res.status(200).json({ message: "Note Created!", createdNote })
} catch (error) {
    res.status(400).json({ err: error.message })
}


  // try {
  //   const note = await Note.create(req.body);
  //   res.status(200).json(note);
  // } catch (e) {
  //   res.status(400).json(e);
  // }
}
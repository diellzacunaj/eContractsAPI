var mongoose = require('mongoose');

var ContractSchema = new mongoose.Schema({
  nr_rendor_prokurorimit: String,
  Lloji_i_prokurorimit: String,
  aktiviteti_i_prokurorimit: String,
  data_inicimit_aktivitetit:Date,
  data_publikimit_shpallje:Date,
  data_nenshkrimit:Date,
  data_fillimit_implementimit:Date,
  data_mbarimit_implementimit:Date,
  data_e_permbylljes_kontrates:Date,
  Cmimi_kontrates:String,
  cmimi_total:String,
  emri_kontratuesit:String
});

module.exports = mongoose.model('Contract', ContractSchema);

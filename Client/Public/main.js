

// Update contract
var id= window.location.hash.substring(1);
       $('body').on('click', '#saveEdit', (e) => {
    let object = {
        nr_rendor_prokurorimit: $('#numri_rendor_prokurimit').val(),
  Lloji_i_prokurorimit: $('#lloji_prokurimit').val(),
  aktiviteti_i_prokurorimit: $('#aktiviteti_prokurimit').val(),
  data_inicimit_aktivitetit: $('#data_inicimit_aktivitetit').val(),
  data_publikimit_shpallje: $('#data_publikimit_shpalljes').val(),
  data_nenshkrimit: $('#data_nenshkrimit').val(),
  data_fillimit_implementimit: $('#data_fillimit_implementimit').val(),
  data_mbarimit_implementimit: $('#data_mbarimit_implementimit').val(),
  data_e_permbylljes_kontrates: $('#data_e_permbylljes_kontrates').val(),
  Cmimi_kontrates: $('#Cmimi_kontrates').val(),
  cmimi_total:$('#cmimi_total').val(),
  emri_kontratuesit:$('#emri_kontratuesit').val()
    }
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:4000/contract/update/' + id,
        type: 'PUT',
        data: object,
        success: (response) => {
            console.log(response);
            window.location.href ="index.html";     

        }
    })
})

//show datas for update 
function populateData()
{
    var text = window.location.hash.substring(1);
    console.log(text);

    $.ajax({
        url: 'http://localhost:4000/contract/' + text,
        type: 'GET',
        success: (response) => {
            console.log(response);
            $('#numri_rendor_prokurimit').val(response.data.nr_rendor_prokurorimit);
            $('#lloji_prokurimit').val(response.data.Lloji_i_prokurorimit);
            $('#aktiviteti_prokurimit').val(response.data.aktiviteti_i_prokurorimit);
            $('#data_inicimit_aktivitetit').val(getDate(response.data.data_inicimit_aktivitetit));
            $('#data_publikimit_shpalljes').val(getDate(response.data.data_publikimit_shpallje));
            $('#data_nenshkrimit').val(getDate(response.data.data_nenshkrimit));
            $('#data_fillimit_implementimit').val(getDate(response.data.data_fillimit_implementimit));
            $('#data_mbarimit_implementimit').val(getDate(response.data.data_mbarimit_implementimit));
            $('#data_e_permbylljes_kontrates').val(getDate(response.data.data_e_permbylljes_kontrates));
            $('#Cmimi_kontrates').val(getDate(response.data.Cmimi_kontrates));
            $('#cmimi_total').val(getDate(response.data.cmimi_total));
            $('#emri_kontratuesit').val(getDate(response.data.emri_kontratuesit));


        }
    });
}


function getDate(s){
var res = s.split("T");
return res[0];
}


// show contrat
function populateData2()
{
    var text = window.location.hash.substring(1);
    console.log(text);

    $.ajax({
        url: 'http://localhost:4000/contract/' + text,
        type: 'GET',
        success: (response) => {
            console.log(response);
            $('#id').html(response.data._id);
            $('#numri_rendor_prokurimit').html(response.data.nr_rendor_prokurorimit);
            console.log(response.data.nr_rendor_prokurorimit);
            $('#lloji_prokurimit').html(response.data.Lloji_i_prokurorimit);
            $('#aktiviteti_prokurimit').html(response.data.aktiviteti_i_prokurorimit);
            $('#data_inicimit_aktivitetit').html(response.data.data_inicimit_aktivitetit);
            $('#data_publikimit_shpalljes').html(response.data.data_publikimit_shpallje);
            $('#data_nenshkrimit').html(response.data.data_nenshkrimit);
            $('#data_fillimit_implementimit').html(response.data.data_fillimit_implementimit);
            $('#data_mbarimit_implementimit').html(response.data.data_mbarimit_implementimit);
            $('#data_e_permbylljes_kontrates').html(response.data.data_e_permbylljes_kontrates);
            $('#Cmimi_kontrates').html(response.data.Cmimi_kontrates);
            $('#cmimi_total').html(response.data.cmimi_total);
            $('#emri_kontratuesit').html(response.data.emri_kontratuesit);


        }
    });
}


//get all contracts
$.ajax({
  url:"http://localhost:4000/contract",
  type:"GET",
  success:function(response){
    console.log(response);

    for(let i=0;i<response.data.length;i++)
    {
      $('#contentTR').append( 
        `<li>
                <div class="row">
                  <div class="col-md-9">
                    <h4>Numri rendor:</h4>
                    <p>
                      ${response.data[i].nr_rendor_prokurorimit}
                    </p>
                  </div>
                  <div class="col-md-3">
                    <div class="col-md-4">
                        <i class="fas fa-eye" onclick="location.href='show.html'+'#${response.data[i]._id}'" id="show" title="Show" ></i>
                    </div>
                    <div class="col-md-4">
                      <i  data-id="${response.data[i]._id}"  onclick="location.href='edit.html'+'#${response.data[i]._id}'" id="edit" title="Edit" class="fa fa-fw fa-edit edit"></i>

                    </div>
                    <div class="col-md-4">
                      <i  data-id="${response.data[i]._id}" id="delete" title="Delete" class="fa fa-fw fa-trash delete"></i>
                    
                    </div>
                  </div>
                </div>
              </li>`
            )
    }
  }
});
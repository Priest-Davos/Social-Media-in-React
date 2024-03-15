const WelcumMsg=({onGetPostClick})=>
{
  //return(<center><h1 classNameName="Welcum-msg">Empty post List</h1></center>)
return(
  <div className="bg-dark text-secondary px-4 py-5 text-center">
  <div className="py-5">
    <h1 className="display-5 fw-bold text-white">😎😎😎 Welcome 😎😎😎 </h1>
    <div className="col-lg-6 mx-auto">
      <p className="fs-5 mb-4">Currently no post here</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      { // <button type="button" className="btn btn-outline-info btn-lg px-4  fw-bold" onClick={onGetPostClick}>Get Post From Server</button>
       }
      </div>
    </div>
  </div>
</div>
)
}
export default WelcumMsg
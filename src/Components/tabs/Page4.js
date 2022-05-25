import React from 'react'

function Page4({ formData, setForm }) {
  const {Reconcilation}=formData;
  return (
    <div className="container bx p-5 my-4">
    <div className="row">
      <div className="col-md-12">
        <h4>Reconciliation</h4>
      </div>
    </div>
    <div className="row py-4">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12 page input px-4">
            <div className="row">
              <div className="col-md-12">
            <h5>For your wealth reconciliation we need to determin your wealth at the beginning of the TAX</h5>
              </div>
            </div>
            <div className="row d-flex justify-content-center py-4">
            <div className="col-md-6">
            <input name='Reconcilation' value={Reconcilation} onChange={setForm}  className='my-2' type="text" placeholder='Account No'   />
            </div>
          </div>

            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page4
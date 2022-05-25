import React from 'react'
import './Profile.css'
function UsersList() {
  return (
    <div>
        <section class="section about-section gray-bg" id="about">
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-text go-to">
                            <h3 class="dark-color">User List</h3>
                            <div class="row about-list">
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>Salary</label>
                                        <p>4th april 1998</p>
                                    </div>
                                    <div class="media">
                                        <label>Business</label>
                                        <p>22 Yr</p>
                                    </div>
                                    <div class="media">
                                        <label>Agriculture</label>
                                        <p>Canada</p>
                                    </div>
                                    <div class="media">
                                        <label>Freelancing</label>
                                        <p>California, USA</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>Bank</label>
                                        <p>info@domain.com</p>
                                    </div>
                                    <div class="media">
                                        <label>Vehicle Market Value</label>
                                        <p>820-885-3321</p>
                                    </div>
                                    <div class="media">
                                        <label>Property</label>
                                        <p>skype.0404</p>
                                    </div>
                                    <div class="media">
                                        <label>Cash</label>
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default UsersList
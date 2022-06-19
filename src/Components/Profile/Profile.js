import React, { useEffect, useState } from "react";
import './Profile.css'
import contract from "../../build/contracts/Taxation.json";
import { ethers } from "ethers";
function Profile() {

    const [owner, setOwner] = useState("");
    const [salary, setSalary] = useState("");
    const [business, setBusiness] = useState("");
    const [agriculture, setAgriculture] = useState("");
    const [freelacing, setFreelacing] = useState("");
    const [bankAccount, setBankAccount] = useState("");
    const [vehicalName, setVehicalName] = useState("");
    const [vehicleValue, setVehicleValue] = useState("");
    const [vehicalRegNo, setVehicalRegNo] = useState("");
    const [property, setProperty] = useState("");
    const [cash, setCash] = useState("");

    async function getRequestDetails() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);

        console.log(accounts[0]);

        const deployedNetwork = contract.networks[5777];
        const taxContract = new ethers.Contract(deployedNetwork.address, contract.abi, provider);

        const taxDetail = await taxContract.getFiler(accounts[0]);
        console.log("Tax Owner", taxDetail[0]);
        setOwner(taxDetail[0].toString())
        setSalary(taxDetail[1].toString())
        setBusiness(taxDetail[2].toString())
        setAgriculture(taxDetail[3].toString())
        setFreelacing(taxDetail[4].toString())
        setBankAccount(taxDetail[5].toString())

        const taxRemDetail = await taxContract.getFilerRemainingData(accounts[0]);
        console.log("Tax Status", taxRemDetail[6]);
        setVehicalName(taxRemDetail[0].toString())
        setVehicleValue(taxRemDetail[1].toString())
        setVehicalRegNo(taxRemDetail[3].toString())
        setProperty(taxRemDetail[4].toString())
        setCash(taxRemDetail[5].toString())
    }

    useEffect(() => {
        getRequestDetails()
    }, [])


    return (
        <div>
            <section class="section about-section gray-bg" id="about">
                <div class="container">
                    <div class="row align-items-center flex-row-reverse">
                        <div class="col-lg-6">
                            <div class="about-text go-to">
                                <h5 class="dark-color">Owner: {owner}</h5>
                                <div class="row about-list">
                                    <div class="col-md-6">
                                        <div class="media">
                                            <label>Salary</label>
                                            <p>{salary} PKR</p>
                                        </div>
                                        <div class="media">
                                            <label>Business</label>
                                            <p>{business} PKR</p>
                                        </div>
                                        <div class="media">
                                            <label>Agriculture</label>
                                            <p>{agriculture} PKR</p>
                                        </div>
                                        <div class="media">
                                            <label>Freelancing</label>
                                            <p>{freelacing} PKR</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="media">
                                            <label>Bank Account</label>
                                            <p>{bankAccount}</p>
                                        </div>
                                        <div class="media">
                                            <label>Vehicle Name</label>
                                            <p>{vehicalName}</p>
                                        </div>
                                        <div class="media">
                                            <label>Vehicle Reg No</label>
                                            <p>{vehicalRegNo}</p>
                                        </div>
                                        <div class="media">
                                            <label>Vehicle Market Value</label>
                                            <p>{vehicleValue} PKR</p>
                                        </div>
                                        <div class="media">
                                            <label>Property</label>
                                            <p>{property} PKR</p>
                                        </div>
                                        <div class="media">
                                            <label>Cash</label>
                                            <p>{cash} PKR</p>
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

export default Profile
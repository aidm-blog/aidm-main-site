let aTag = document.createElement('a');
aTag.innerHTML = 'Trigger email';
aTag.target = "_blank";
// aTag.className = 'btn-primary';
aTag.addEventListener('click', () => {
    let useremailAddress = document.getElementById("useremailAddress").value;
    let userCity = document.getElementById("userCity").value;
    let userState = document.getElementById("userState").value;
    let userName = document.getElementById("userName").value;
    let emailAction = document.getElementById("emailAction");
    let emailToAddress = useremailAddress;
    let emailInBCC = 'cmsec@tn.gov.in,cmcell@tn.gov.in,cs@tn.gov.in,mlakolathur@tn.gov.in,kanimozhi@sansad.nic.in,dgp@tncctns.gov.in,igp.south@tncctns.gov.in,adgp.sjahr@tncctns.gov.in,dgp.shrs@tncctns.gov.in,sp.tut@tncctns.gov.in,adsp.crthoothukudi@tncctns.gov.in,hcourt@tn.nic.in,regrgenl@nic.in,adsp.pew_thoothukudi@tncctns.gov.in';
    let emailSubject = 'Justice for Sattankulam shopkeepers Jayaraj and Benix Emmanuel.';
    let emailBody = `Dear Sir/Madam,%0D%0A%0D%0AI am a resident of ${userCity}, ${userState}. I am a concerned citizen of India who is appalled at the state of blatant police brutality that runs unchecked through our nation in general, and specifically in Tamil Nadu, now. I am emailing today to demand accountability for the custodial torture and subsequent deaths of Jayaraj and Benix Emmanuel in Sattankulam, Thoothukudi by officers Mr Balakrishnan and Mr Pauldurai under the Section 10-19 of Tamil Nadu Police (Reforms) Act, 2013. I demand an unbiased investigation into their alleged torture and deaths and that the officers involved be terminated, arrested and charged for murder. I also demand justice for the family of the two men who have lost two of their innocent family members because of the brutality of the officers involved. Suspension and transfer of the officers to a different police department simply aren't enough. The officers involved must face consequences for their actions in order to deter law enforcement from the gross misuse of power in the future. Mr Balakrishnan and Mr Pauldurai must be charged for the brutal assault of the two men and the sexual misconduct committed against Benix in custody. In addition, I demand we provide essential human rights training to all police officers and for the constitution of the Police Complaints Authority in Tamil Nadu so as to provide speedy and swift justice to victims of police brutality.%0D%0A%0D%0ASincerely, %0D%0A%0D%0A${userName}`;
    aTag.href = `mailto:${emailToAddress}?subject=${emailSubject}&bcc=${emailInBCC}&body=${emailBody}`;
});
emailAction.appendChild(aTag);
const jokesArray = [
    "Why did the computer go to therapy? Kyunki uski life full of bytes thi!",
    "Santa: Banta, iss bar exam mein kya laya hai? Banta: Paas!",
    "Teacher: Tumhara homework kyun nahi kiya? Student: Teacher, kal to Sunday tha, na!",
    "Why did the tomato turn red? Kyunki usse salad mein dressing dekhne ko mila tha!",
    "Wife: Tum mujhe kabhi samajh nahi paate ho! Husband: Main kya kahu, Google bhi confused hota hai kabhi-kabhi.",
    "Doctor: Tumhein khane mein kya pasand hai? Patient: Doctor, bills pasand hai, unko to maine bahut khaya hai!",
    "Why did the scarecrow become a successful motivational speaker? Kyunki usne khud ko bahut achi tarah se stand kiya tha!",
    "Boss: Tum itne late kyun aaye ho? Employee: Sir, traffic signal bhi to red tha!",
    "Santa: Tumhara password kya hai? Banta: Incorrect!",
    "Why did the pencil go to school? Kyunki usne seekhna tha ki life kab aur kahaan sharp ho jaaye!",
    "Wife: Tumhein mujhme kya achha lagta hai? Husband: Tumhare paiso mein jo mere naam ka hissa hai!",
    "Patient: Doctor, mujhe lagta hai main bhool gaya hoon kuch. Doctor: Kya bhool gaye ho? Patient: Wohi jo aap poochh rahe hain!",
    "Why did the banana go to the party? Kyunki use peele dikhna tha!",
    "Teacher: Tum itne chhote kyun ho? Student: Madam, mere parents bhi short circuit hai!",
    // Add more jokes as needed
  ];
  
  // Accessing a joke from the array
  console.log(jokesArray[0]);
joke.innerHTML=jokesArray[Math.floor(Math.random() * jokesArray.length)];

// joke.innerHTML = jokesArray[Math.floor(Math.random() * jokesArray.length)]
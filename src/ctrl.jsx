export default function Main () {
    return (<>
        <main class = "content">
    <section class ="section">
        <form>
              <h1>Login for PM Shri Kendriya Vidyalaya Ballygunge</h1>
    <h2>
        <label for ="email id" >Enter Email ID</label>
        <input type ="email" id="email" name="email" placeholder="Enter Email ID" required  />
    </h2>
   <h2> <label for="username">Enter Username:</label>
    <input type="text" id="username" name="username" placeholder="enter username" required />
</h2>

<p></p>
<h2>
    <label for="password" >Enter Password:</label>
    <input type="password" id="password" name="password" placeholder= "password required"required /> 
</h2>
<p>
    <h2>
        <label for="numbers">Enter Unique ID</label>
        <input type="unique id" id="unique id" name="unique id" placeholder ="Unique ID" required />
    </h2>
</p>

</form>
</section>
</main>
     </>
    )
}
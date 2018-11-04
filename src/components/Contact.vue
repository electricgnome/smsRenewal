<template>
    <div class="container">
        <h1>Contact Us</h1>
       
          
<section class="section">

    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        matter of hours to help you.</p>

    <div class="row">

        <div class="col-md-9 mb-md-0 mb-5">
            <form method="POST" action="https://formspree.io/ysolaadebayo@gmail.com">

                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="name" class="">Name</label>
                            <input type="text" id="name" name="name" class="form-control">  
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="email" class="">Email</label>
                            <input type="text" id="email" name="_replyto" class="form-control">       
                        </div>
                    </div>               
                </div>
    

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Subject</label>
                            <input type="text" id="subject" name="subject" class="form-control">
                        </div>
                    </div>
                </div>
             
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form">
                            <label for="message">Message</label>
                            <textarea type="text" id="message" name="message" rows="4" class="form-control md-textarea"></textarea>
                        </div>
                    </div>
                </div>
            

            <br>
            <div class="text-center text-md-left">
                <button type="submit" class="btn btn-primary mb-2">Send</button>
            </div>

            </form>
            <div class="status"></div>
        </div>
       
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fa fa-map-marker-alt fa-2x"></i>
                    <p>Houston, TX USA</p>
                </li>

                <li><i class="fa fa-phone mt-4 fa-2x"></i>
                    <p> 555-555-5555</p>
                </li>

                <li><i class="fa fa-envelope mt-4 fa-2x"></i>
                    <p>contact@smsrenewal.com</p>
                </li>
            </ul>
        </div>
    </div>
</section>

</div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {};
  }
};
</script>

<style>
</style>

<div class="row contact-content content">
<div class="large-12 columns">
		
		<h2>How to contact me:</h2>
		<p>If you're interested in learning more about what I can do, or just want to say 'Hi', drop me a line!</p>
		
		<div class="contact_form">
		<?php echo validation_errors(); ?>

		<?php echo form_open('contact'); ?>
		    <fieldset>
		          <div class="form-group">
		          <label for="name">Your Name:</label>
		            <input type="text" class="form-control input-md" required name="name" placeholder="Enter your name..." value="<?php echo set_value('name'); ?>"/>
		          </div>
		          <div class="form-group">
		          <label for="email">Your Email:</label>
		           <input type="email" name="email" class="form-control input-md" required placeholder="name@email.com" />
		          </div>
		           <div class="clearfix"></div>
		          <div class="form-group">
		          <label for="message">Message:</label>
		            <textarea type="text" rows="10" name="message" required class="form-control input-md"></textarea>
		          </div>
		          <input type="submit" value="Submit" class="button"/>
		      </fieldset>

		<?php echo form_close(); ?>

		</div> <!-- end form -->
		</div> <!-- end description -->

</div>
</div>
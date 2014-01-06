<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Contact extends CI_Controller {

	public function index()
	{	
		$this->load->library('form_validation');

		$this->form_validation->set_rules('name', 'Name', 'trim|required');
		$this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
		$this->form_validation->set_rules('message', 'Message', 'required');


		if($this->form_validation->run() == FALSE)
		{
			$this->load->view('header');
			$this->load->view('contact_view');
			$this->load->view('footer');
		}
		else 
		{
			$this->load->view('header');

			$data = $_POST;
			$this->load->view('contact_success', array('data' => $data));
			$this->load->view('footer');
		}
	}
}

/* End of file contact.php */
/* Location: ./application/controllers/contact.php */
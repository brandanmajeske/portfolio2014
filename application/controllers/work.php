<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Work extends CI_Controller {

	public function index()
	{
		$this->load->view('header');
		$this->load->view('work_view');
		$this->load->view('footer');
	}
}

/* End of file work.php */
/* Location: ./application/controllers/work.php */
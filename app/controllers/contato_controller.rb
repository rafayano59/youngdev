class ContatoController < ApplicationController
    
  def new
    @contato = Contato.new
  end
  
  def create
    @contato = Contato.new(contato_params)

    if @contato.valid?
      ContatoMailer.contact_me(@contato).deliver_now
      redirect_to new_contato_url, notice: "Message received, thanks!"
    else
      render :new
    end
  end

  private

  def contato_params
    params.require(:contato).permit(:name, :email, :phone, :servico, :message)
  end
  
end

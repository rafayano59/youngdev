class ContatoController < ApplicationController
    
  def new
    @contato = Contato.new
  end
  
  def create
    @contato = Contato.new(contato_params)

    if @contato.valid?
      ContatoMailer.contact_me(@contato).deliver_now
      flash[:notice] = "Mensagem enviada! Retornaremos assim que possível!"
      redirect_to new_contato_url
    else
      flash[:alert] = "There was an error sending your message. Please try again."
      redirect_to new_contato_url
    end
  end

  private

  def contato_params
    params.require(:contato).permit(:name, :email, :phone, :servico, :message)
  end
  
end

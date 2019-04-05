class ContatoMailer < ApplicationMailer
  default :from => 'rafael.yano59@gmail.com'
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contato_mailer.contact_me.subject
  #
  def contact_me(contato)
    @greeting = "Hi"
    @name = contato.name
    @body = contato.message
    @email = contato.email
    @phone = contato.phone
    @servico = contato.servico
    
    
    mail(to: "rafael.yano59@gmail.com", subject: "Solicitando orçamento")
  end
end

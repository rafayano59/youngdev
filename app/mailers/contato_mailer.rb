class ContatoMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contato_mailer.contact_me.subject
  #
  def contact_me(contato)
    @greeting = "Hi"
    @body = contato.message
    
    mail to: "rafael.yano59@gmail.com", from: contato.email
  end
end

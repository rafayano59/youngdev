# Preview all emails at http://localhost:3000/rails/mailers/contato_mailer
class ContatoMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/contato_mailer/contact_me
  def contact_me
    ContatoMailer.contact_me
  end

end

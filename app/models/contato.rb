class Contato
  include ActiveModel::Model
  attr_accessor :name, :email, :phone, :servico, :message
  validates :name, :email, :servico, :message, presence: true
end
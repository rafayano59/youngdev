class AddServicoToContatos < ActiveRecord::Migration[5.2]
  def change
    add_column :contatos, :servico, :string
  end
end
